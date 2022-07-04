import React, { useEffect } from 'react'
import { useParams, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchHome } from "../slices/home"

function HomeDetails() {
  const {id} = useParams()
  const homeInfo = useSelector((state) => state.home)
  const dispatch = useDispatch()
  const navigate = useNavigate()


useEffect(()=>{
  dispatch(fetchHome())
}, [] )

const home = homeInfo.find((home) => home.id === Number(id))

function homeHandler(){
  navigate('/')
}

return (
  <>
    <section className="home-deets">
      <h2 className="subtitle-1">{home.home_name}</h2>
      <h2 className="subtitle-2">OP: {home.poster_name}</h2>
      <section className="home-link-wrap">
        <button className="back-to-home" onClick={homeHandler}>Back to Home</button>
      </section>
    </section>
  </>
)
}

export default HomeDetails