import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mb-2'>Question And Answer Section</h1>
            <div className='container mx-auto border border-black p-4 mb-4 bg-gray-400'>
                <h2 className='text-2xl p-1'>What is the purpose of React Router?</h2>
                <p>Routing is a process in which a user is directed to different pages based on
                    their action or request. ReactJS Router is mainly used for developing Single Page
                    Web Applications. React Router is used to define multiple routes in the
                    application. When a user types a specific URL into the browser, and if this
                    URL path matches any 'route' inside the router file, the user will be redirected
                    to that particular route.</p>
                <p>React Router plays an important role to display multiple views in a single page
                    application. Without React Router, it is not possible to display multiple views
                    in React applications. Most of the social media websites like Facebook, Instagram
                    uses React Router for rendering multiple views.</p>
            </div>
            <div className='container mx-auto border border-black p-4 mb-4 bg-gray-400'>
                <h2 className='text-2xl p-1'>How does context API Work?</h2>
                <p>Context provides a way to pass data through the component tree without having to
                    pass props down manually at every level.
                    In a typical React application, data is passed top-down (parent to child) via
                    props, but such usage can be cumbersome for certain types of props
                    (e.g. locale preference, UI theme) that are required by many components within
                    an application. Context provides a way to share values like these between
                    components without having to explicitly pass a prop through every level of the
                    tree.</p>
                <p>The React Context API is a way for a React app to effectively produce global
                    variables that can be passed around. This is the alternative to "prop drilling"
                    or moving props from grandparent to child to parent, and so on. Context is also
                    touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='container mx-auto border border-black p-4 bg-gray-400'>
                <h2 className='text-2xl p-1'>React useRef Hook</h2>
                <p>The useRef Hook allows you to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when
                    updated.</p>
                <p>It can be used to access a DOM element directly.
                    If we tried to count how many times our application renders using the useState
                    Hook, we would be caught in an infinite loop since this Hook itself causes a
                    re-render.To avoid this, we can use the useRef Hook.
                    useRef() only returns one item. It returns an Object called current.
                    When we initialize useRef we set the initial value: useRef(0).</p>
            </div>
        </div>
    );
};

export default Blog;