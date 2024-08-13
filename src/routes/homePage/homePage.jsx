import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'
function HomePage() {
  return (
    <div className='homePage'>  

      <div className="textContainer">
      <div className="wrapper">
      <h1 className='title'>
        Find Mzansi Real Estate $ Get Your Dream Place
       </h1>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis quaerat sed a fuga quibusdam quo iusto quos voluptas culpa quia recusandae aliquid possimus, id repudiandae. Suscipit, alias ipsam? Et recusandae aliquam nihil quidem quos reiciendis cupiditate nulla, porro dolore laboriosam, velit totam. Possimus ratione tempora
       </p>
       <SearchBar/>
       <div className="boxes">
        <div className="box">
          <h1>16+</h1>
          <h2>Years of experience</h2>
        </div>
        <div className="box">
          <h1>200</h1>
          <h2>Award Gained</h2>
        </div>
        <div className="box">
          <h1>2000</h1>
          <h2>Property Ready</h2>
        </div>
       </div>
      </div>
      </div>


      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage