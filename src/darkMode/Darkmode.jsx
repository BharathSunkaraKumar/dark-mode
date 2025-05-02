import { useEffect, useState } from 'react'
import articles from './Data'
import moment from 'moment'
import './Darkmode.css'
import useLocalStorage from 'use-local-storage'

const Darkmode = () => {
    const [data, setData] = useState(articles)
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage('theme', preference)
    console.log("preference::"+preference)
    console.log('theme::'+theme)
    const handleToggle = () => {

        setTheme(!theme)
    }
    
    return(
        <>
            <main className='app' data-theme={theme ? 'dark' : 'light'}>
            <div className='main'>
                
                    <div className='header'>
                        <div className="overreacted">
                            <h1>overreacted</h1>
                        </div>
                        <div>
                            <div className='toggle-container'>
                                <input 
                                    type='checkbox'
                                    id='check'
                                    checked={theme}
                                    className='toggle'
                                    onChange={()=>{handleToggle(theme)}}
                                />
                                <label htmlFor='check' >Dark Mode</label>
                            </div>
                        </div>
                    </div>
                    {
                        data.map((e) => {
                            return (
                                <div key={e.id} className="container">
                                    <h3>{e.title}</h3> 
                                    <div className='info'>
                                        <span>{moment(e.date).format('dddd Do, YYYY')}</span>
                                        <br/>
                                        <span>{e.snippet}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                
            </div>
            </main>
        </>
    )
}

export default Darkmode;