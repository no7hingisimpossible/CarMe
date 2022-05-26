import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
        <h1 className="text-3xl font-bold mb-5">
          Que : How will you improve the performance of a react application?
        </h1>
        <p className="text-xl">
          <span className="font-bold text-primary">Ans</span> : Why does a React
          web app run slow? The answer often lies in when and how frequently
          your components re-render, and whether those re-renders were even
          necessary. React doesn’t promise magical performance gains, but it
          provides just the right tools and functionalities to make it easy. In
          this article, Toptal Freelance Software Engineer William Wang walks us
          through some optimization techniques that can help you build
          performant React web apps.With React, you can gain a lot of the
          performance improvements that it has to offer by measuring and
          optimizing how and when your components render. And, React provides
          just the tools and functionalities necessary to make this easy.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-5 mt-20">
          Que : What are the diffrent ways to manage a state in a react
          application?
        </h1>
        <p className="text-xl">
          <span className="font-bold text-primary">Ans</span> : Biggest
          Challenge in React application is the management of state for frontend
          developers. In large applications, React alone is not sufficient to
          handle the complexity which is why some developers use React hooks and
          others use state management libraries such as Redux.React components
          have a built-in state object. The state is encapsulated data where you
          store assets that are persistent between component renderings. The
          state is just a fancy term for a JavaScript data structure. If a user
          changes state by interacting with your application, the UI may look
          completely different afterwards, because it's represented by this new
          state rather than the old state.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-5 mt-20">
          Que: How dose proto typical inheritance work?{" "}
        </h1>
        <p className="text-xl">
          <span className="font-bold text-primary">Ans</span> : JavaScript is a
          prototype-based, Object Oriented programming language. After the ES6
          updates, JavaScript allowed for “prototypal inheritance”, meaning that
          objects and methods can be shared, extended, and copied. Sharing amid
          objects makes for easy inheritance of structure data fields, behavior
          functions / methods, and state data values. JavaScript is the most
          common of the prototype-capable languages, and its capabilities are
          relatively unique. When used appropriately, prototypical inheritance
          in JavaScript is a powerful tool that can save hours of coding. Today,
          we want to get you acquainted with prototypal inheritance in
          JavaScript to get you up to date with the ES6 capabilities.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-5 mt-20">
          Que : What is a unit test ? Why should write unit tests ?
        </h1>
        <p className="text-xl">
          <span className="font-bold text-primary">Ans</span> : Unit testing
          involves testing individual components of the software program or
          application. The main purpose behind this is to check that all the
          individual parts are working as intended. A unit is known as the
          smallest possible component of software that can be tested. Generally,
          it has a few inputs and a single output.The main objective of unit
          testing is to ensure that each individual part is working well and as
          its supposed to work. The entire system will only be able to work well
          if the individual parts are working well. Unit testing is performed by
          the software developers themselves. Sometimes, independent software
          testers also perform these tests. There are two main types of unit
          testing: manual and automated. The automated method is the most
          preferred as it is faster and more accurate, but performing this task
          manually is also an option. The manual approach has a step by step
          instructional procedure that helps testers perform this task
          efficiently. The automated unit testing usually involves the developer
          first writing a section of the code in the application so that the
          function can be tested. After that, when the application is deployed,
          they remove the test code. They can also isolate the function to test
          it in a more thorough way. This helps with identifying any dependency
          that might be there between the tested code and the other data spaces.
          These dependencies can then be eliminated.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-5 mt-20">
          Que : You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <p className="text-xl">
          <span className="font-bold text-primary">Ans</span> : I will use rest
          api for this and use the name of the specific product to find them. I
          will find it in rest api.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-5 mt-20">
          Que : Why you do not set the state directly in React. For example, if
          you have const [products, setProducts] = useState([]). Why you do not
          set products = [...] instead, you use the setProducts?
        </h1>
        <p className="text-xl">
          <span className="font-bold text-primary">Ans</span> : Prototype-based
          programming is a style of object-oriented programming where behavior
          reuse (known as inheritance) is performed through the process of
          reusing existing objects that act as prototypes. This model can also
          be referred to as prototype, prototype-based, classless or
          example-based programming.
        </p>
      </div>
        </div>
    );
};

export default Blogs;