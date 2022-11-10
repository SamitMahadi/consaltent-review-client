import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='text-6xl font-bold text-red-700 mt-5 mb-5 text-center'>Blogs</p>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-4xl font-medium">
                    1.Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-4xl font-medium">
                    2.What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                        .</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-4xl font-medium">
                    3.What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-4xl font-medium">
                    4.How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;