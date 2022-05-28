import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';


const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='px-10'>
                <div class="card  bg-base-100 shadow-xl my-4">
                    <div class="card-body">
                        <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                        <p>Unit test is a way to test our application.It can be as small as a simple feature.Before publishing a software a thouroughly testing it needed .So the coustomer don't get a bad experience with the software.It can hmper the software marketing and for the company.So before publishing a software it is compulsory to go through unit testing.Unit testing can be automated or manual</p>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl my-4">
                    <div class="card-body">
                        <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <div class="mockup-code">
                            <pre data-prefix="1">
                                <code>
                                    const searchedInput=prompt('Enter the product name here')
                                </code>
                            </pre>
                            <pre data-prefix="1">
                                <code>
                                const desiredProduct=products.filter(elem=>elem.name===searchedInput)
                                </code>
                            </pre>
                            <pre data-prefix="2"><code>console.log(desiredProduct)</code></pre>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-2xl my-4">
                    <div class="card-body">
                        <h2 class="card-title"> How will you improve the performance of a React Application?</h2>
                        <p>
                            To improve react application performence this steps are necessary.This are:-
                        </p>
                        <ul>
                            <li>Image lazy loading.Without loading all images at once we can use lazy loading .It will make sure that the user doesn't have to wait first to load the website.By lazy loading it will load before the viewport</li>
                            <li>Limiting unneccesary use html element .like using div,section ,or other semantic tags.We can use react fragment or simply '<></>' this tag.</li>
                            <li>Using stateless or functional components without using class component.</li>
                        </ul>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-2xl my-4">
                    <div class="card-body">
                        <h2 class="card-title"> What are the different ways to manage a state in a React application?</h2>
                        <p>
                            There are some ways to manage state.Some ways are listed below:-
                        </p>
                        <ul>
                            <li>Context API</li>
                            <li>Redux</li>
                            <li>State Uplifting</li>
                            <li>useState</li>
                            <li>useEffect</li>
                            <li>useReducer</li>
                        </ul>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-2xl my-4">
                    <div class="card-body">
                        <h2 class="card-title"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]) Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;