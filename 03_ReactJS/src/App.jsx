import Card from "./components/Card"

const App = () => {
  return (
    <div className="parent">
      <Card img="https://images.unsplash.com/photo-1770341565335-0eb5b2465529?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzl8fHxlbnwwfHx8fHw%3D"
      name="SENSEI_SS" role="CyberSecurity Expert at IIT Kanpur."age={20}/>

      <Card img="https://images.unsplash.com/photo-1773332585698-cba3c91b73e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D" name="ASUS" role="Full Stack Developer at Google(Alphabet)."age={20}/>

      <Card img="https://images.unsplash.com/photo-1779896412244-aed1d2f8bed2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D"
      name="APSJ" role="Data Scientist at Facebook."age={20}/>

      <Card img="https://plus.unsplash.com/premium_photo-1763734616837-b51f49ceaab5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDN8fHxlbnwwfHx8fHw%3D"
      name="FAS" role="Software Engineer at Amazon India." age={20}/>
    </div>
  )
}
export default App;