import { useParams } from 'react-router-dom';
import blog01 from '../assets/blog01.jpg';
import blog02 from '../assets/blog02.jpg';
import blog03 from '../assets/blog03.jpg';
import blog04 from '../assets/blog04.jpg';
import blog05 from '../assets/blog05.jpg';
import '../styles/pages/BlogPost.css';
const blogPosts = [
    {
      id: 1,
      title: 'How I Built LegalAide: An AI-Powered Legal Assistant',
      content: `Building LegalAide was a transformative experience in merging artificial intelligence with legal aid to empower both lawyers and the general public. The core goal was to simplify access to legal insights using modern AI tools. I used FastAPI for the backend due to its speed and support for asynchronous tasks, which made it ideal for handling large document processing efficiently. For the frontend, I chose Streamlit — a Python-based tool — which allowed rapid prototyping and easy deployment of interactive features without requiring heavy JavaScript.
  
      The app has three main functions: document summarization, language translation, and an AI-powered chatbot. Summarization was handled using NLP models that break down complex legal PDFs into digestible overviews. The translation module ensured that regional language barriers were minimized, as the app could convert legal text into multiple Indian languages. Lastly, the chatbot, trained on Indian Penal Code articles and FAQs, helps users query legal topics without needing direct legal assistance.
  
      Through LegalAide, I learned how AI can genuinely democratize access to complex fields like law. This project was not only technically fulfilling but also aligned with a deeper purpose—bringing legal clarity to the masses.`,
      category: 'AI Projects',
      date: '2025-05-15',
      readTime: '7 min read',
      image: blog01
    },
    {
      id: 2,
      title: 'Creating a Budget Estimator with React & Node.js for Heritage Travel',
      content: `While working on my heritage tourism app, I realized many users struggled with planning trip budgets. To solve this, I created a dynamic budget estimator using the MERN stack (MongoDB, Express, React, Node.js). This tool allows users to estimate travel costs based on parameters like destination, number of travelers, trip duration, accommodation type, daily meals, and souvenir spending.
  
      The frontend, built with React, features an intuitive UI where users input their preferences. I used controlled components to manage input values in real time and state lifting to process final cost estimates. The backend, powered by Express, processes these inputs and pulls hotel data from a JSON file (and later from MongoDB) to provide personalized estimates. A function also calculates miscellaneous expenses automatically based on travel patterns and location data.
  
      Integrating this feature into my heritage app helped users explore culturally rich places while having financial clarity. I also learned how to validate user input, manage state efficiently in React, and handle HTTP requests between frontend and backend. This small yet impactful feature boosted the app's usability significantly.`,
      category: 'MERN Stack',
      date: '2025-05-10',
      readTime: '6 min read',
      image: blog02
    },
    {
      id: 3,
      title: 'Lessons from 3 Hackathons: From Ideas to MVP in 36 Hours',
      content: `Participating in three 36-hour hackathons taught me more than any tutorial ever could. The adrenaline rush, teamwork, and limited time serve as a crash course in turning ideas into action. During these events, I worked on projects ranging from smart city apps to AI-driven tools. Each time, we started with a blank canvas and ended with a Minimum Viable Product (MVP) that actually worked.
  
      One key takeaway was idea validation—in a hackathon, you need to filter out ideas that are too broad and focus on solving a real-world problem within hours. Time management becomes your best friend. Another essential skill is team communication. When you're sleep-deprived and on a deadline, clarity and respect keep the team together.
  
      I also improved at rapid prototyping, especially using tools like React, Firebase, and Flask. These helped me build frontends and backends faster than I thought possible. Finally, presenting the solution convincingly within 2–3 minutes taught me the art of pitching. It’s not just what you build, but how you sell the story behind it.
  
      These hackathons made me realize that failure isn’t bad—it’s often the fastest way to learn and pivot.`,
      category: 'Career & Hackathons',
      date: '2025-04-28',
      readTime: '5 min read',
      image: blog03
    },
    {
      id: 4,
      title: 'Building a Portfolio Website with Vite, React & Tailwind',
      content: `I decided to revamp my portfolio to better showcase my projects, and I wanted it to be fast, modern, and fully customizable. Instead of using Create React App, I chose Vite—a blazing-fast frontend build tool. Vite’s instant Hot Module Replacement and minimal configuration made development smooth and enjoyable.
  
      For styling, I picked Tailwind CSS, which gave me utility-first classes that made responsive design a breeze. With Tailwind, I didn’t have to write custom CSS for every component. I could easily build a clean layout using grid and flexbox utilities and added hover animations, transitions, and dark mode support with minimal effort.
  
      The portfolio includes multiple pages: a project showcase, resume section, contact form, and blog preview. I also used framer-motion and AOS for scroll animations and transitions, giving the site a polished look.
  
      The biggest lesson was component-driven design—I broke down the site into reusable sections, which made the codebase easier to maintain. This project helped me combine frontend development skills with personal branding effectively.`,
      category: 'Frontend',
      date: '2025-04-20',
      readTime: '6 min read',
      image: blog04
    },
    {
      id: 5,
      title: 'Connecting MongoDB with Express in a MERN App',
      content: `While transitioning my heritage app to a full MERN stack architecture, one of the key steps was connecting MongoDB to the Express backend. I needed a way to store dynamic data like user profiles, saved places, and trip histories. MongoDB was ideal due to its flexible schema and ability to store JSON-like documents.
  
      I used Mongoose to create schemas for users and travel entries, added validation rules, and developed RESTful API routes for CRUD operations. Express made it easy to route API calls and integrate middleware for parsing JSON, handling errors, and enabling CORS. I deployed the MongoDB database using MongoDB Atlas, making it accessible from anywhere securely.
  
      I also added environment variables using dotenv to store credentials and followed a modular folder structure to keep routes, models, and controllers separate. This helped me maintain cleaner code and made the app more scalable.
  
      Connecting Express to MongoDB not only gave my app a strong backend foundation but also helped me learn backend logic, database design, and API building. This experience made me confident in developing full-stack apps from scratch.`,
      category: 'MERN Stack',
      date: '2025-04-10',
      readTime: '7 min read',
      image: blog05
    }
  ];
  
  

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-container">
        <h2>Post not found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <img src={post.image} alt={post.title} className="blog-post-image" />
        <div className="blog-post-meta">
          <span className="category">{post.category}</span>
          <span className="date">{post.date}</span>
          <span className="read-time">{post.readTime}</span>
        </div><br></br><br></br>
        <h1 className="blog-post-title">{post.title}</h1>
      </div><br></br><br></br>
      <div className="blog-post-content">
        <p>{post.content}</p>
      </div><br></br><br></br>
    </div>
  );
};

export default BlogPost;
