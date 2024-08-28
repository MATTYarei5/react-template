export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      
      <section className="capstone-process">
        <h2>Capstone Project Process</h2>
        <p>
          This e-commerce application was developed as part of a capstone project, focusing on key front-end development skills. 
          The project involved using React for component-based architecture, implementing a responsive design with SCSS, 
          and integrating with the Fake Store API for product data.
        </p>
        <p>
          Throughout the project, I faced several challenges, such as ensuring component reusability and optimizing state management. 
          These were overcome through careful planning and iterative development, leading to a scalable and maintainable codebase.
        </p>
        <a href="https://fakestoreapi.com/docs" target="_blank" rel="noopener noreferrer">Fake Store API Documentation</a>
      </section>
      
      <section className="course-struggles">
        <h2>Course Challenges and Solutions</h2>
        <p>
          One of the most significant challenges during the frontend course was managing complex component hierarchies while maintaining clean and readable code. 
          By leveraging React's hooks, such as `useState` and `useEffect`, I was able to manage component state effectively and keep the application responsive and performant.
        </p>
        <p>
          Another challenge was styling the application to be fully responsive across various screen sizes. 
          This was achieved through the use of SCSS and media queries, ensuring a consistent user experience on both desktop and mobile devices.
        </p>
      </section>
      
      <section className="favorite-languages">
        <h2>Favorite Programming Languages</h2>
        <p>
          Throughout the course, I found React and JavaScript to be particularly enjoyable. 
          React's component-based architecture allows for the modular and reusable code, which is essential for building scalable applications. 
          JavaScript's flexibility and vast ecosystem of libraries made it easier to implement complex features and integrate with APIs.
        </p>
        <p>
          Additionally, I enjoyed working with SCSS for styling. The ability to nest styles and use variables significantly streamlined the styling process and made the codebase more maintainable.
        </p>
      </section>
    </div>
  );
}
