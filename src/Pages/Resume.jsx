function Resume() {
    return (
      <div className="z-50 absolute top-0">
        <iframe className="w-screen h-screen" src={process.env.PUBLIC_URL + "/Images/Barbacena, Rainier C. - Resume.pdf"} frameborder="0"></iframe>
      </div>
    )
  }
  
  export default Resume;