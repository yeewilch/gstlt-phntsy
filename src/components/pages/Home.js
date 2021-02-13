import EmailForm from '../EmailForm';

const Home = () => {
    return(
        <div className="main">
          <p>Welcome to Phantasynet - a centralized bulletin board covering a select few record labels and imprints.</p>
          <p>If you're not into endless social media scrolling it can be difficult to stay in the loop and get the latest news.
            Through our newsletter you can sign up for updates on categories of your choice, delivered directly to yout email inbox.
          </p>
          <EmailForm />
          <p>We'll try not to spam and keep it relevant. You can always update or cancel your subscription.</p>
        </div>
    )
}

export default Home
