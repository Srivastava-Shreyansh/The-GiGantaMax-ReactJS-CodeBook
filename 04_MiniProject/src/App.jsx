import Card from "./components/Card.jsx";

const App = () => {
  return (
    <div className="parent">
      <Card img="https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=180&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Amazon" day="5 days ago" role="Senior UI/UX Designer" dur1="Part-time" dur2="Senior level" pay="$120/hr" place="San Francisco, CA" />

      <Card img="https://th.bing.com/th/id/OIP.SKseoFKXigablwDM3UjV0wHaHa?w=197&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Google" day="30 days ago" role="Graphic Designer" dur1="Full-time" dur2="Flexible schedule" pay="$150k - $220k" place="Mountain View, CA" />

      <Card img="https://th.bing.com/th/id/OIP.k4EHcAB7zyCzgA4H8KBZ7wHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Dribbble" day="18 days ago" role="Senior Motion Designer" dur1="Contract" dur2="Remote" pay="$85/hr" place="San Francisco, CA" />

      <Card img="https://th.bing.com/th/id/OIP.xs3lenmTmtfS8m4Sjyr6ugHaFS?w=211&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Meta" day="3 months ago" role="UX Designer" dur1="Full-time" dur2="In office" pay="$200k - $250k" place="New York, NY" />

      <Card img="https://th.bing.com/th/id/OIP.dB2a6MIRXsFJX80wfAfDQwHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" name="Airbnb" day="1 day ago" role="Junior UI/UX Designer" dur1="Contract" dur2="Remote" pay="$100/hr" place="San Francisco, CA" />
      
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd37QFyv4GzzqxSw5Otx1AI_OUJPOVoiaW3zZv2RMMBg&s=10" name="Apple" day="6 days ago" role="Graphic Designer" dur1="Full-time" dur2="Flexible schedule" pay="$85k - $120k" place="Cupertino, CA" />
    </div>
  );
};
export default App;