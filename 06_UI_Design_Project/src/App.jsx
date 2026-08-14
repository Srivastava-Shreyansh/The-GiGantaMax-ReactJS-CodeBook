import Section_01 from "./components/Section-01/Section_01";
import Section_02 from "./components/Section-02/Section_02";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Prime customers, that have access to bank credit and are satisfied with the current product.",
      tag: "Satisfied"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661767011483-feab300357ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "Prime customers, that have access to bank credit and are not satisfied with the current product.",
      tag: "Undereserved"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      tag: "Underbanked "
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      tag: "Banked"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      tag: "Satisfied"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      tag: "Unsatisfied"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1683133457579-baf5689d4d73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro: "Customers from near-prime and sub-prime segments with no access to bank credit.",
      tag: "Undereserved"
    }
  ]

  const pageScrolling = (val)=>{
    if(val>0){
      console.log("Scrolling Down!")
    }else{
      console.log("Scrolling Up!")    
    }
  }

  return (
    <div onWheel={(e)=>pageScrolling(e.deltaY)}>
      <Section_01 user={users}/>
      <Section_02 />
    </div>
  )
}
export default App;