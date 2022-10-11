import React from 'react';

const Blog = () => {
    return (
        <div>

            <main class="container mt-5">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Difference among var , let and constant
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The differences between var, let, and const variable declaration in JavaScript include:
                                Variables declared with var and const are scoped to the immediate function body.
                                Variables declared with the var keyword are hoisted. Hoisting means that the variable can be
                                accessed in their enclosing scope even before they are declared.
                                Variables declared with the let keyword are block-scoped, which means the variables will have
                                scope to the immediate enclosing block.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Difference between Arrow functiona and Regular function
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Following are the main differences:
                                <ul>
                                    <li> Syntax
                                    </li>
                                    <li> Arguments binding</li>
                                    <li>Use of this keyword</li>
                                    <li> Using a new keyword</li>
                                    <li>No duplicate named parameters</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Why do we use template string in Javascript?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Template strings are a powerful feature of modern JavaScript released in ES6. It lets us
                                insert/interpolate variables and expressions into strings without needing to concatenate like in
                                older versions of JavaScript. It allows us to create strings that are complex and contain
                                dynamic elements
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Blog;