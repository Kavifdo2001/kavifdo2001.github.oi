import React from 'react'
import './addpost.css'

export default function AddPost() {
  return (
    <div className='addPost'>

        <div className="addPostContainer">
            <div className="addPostTop">
                <h2 className='name'>C++</h2>
                <br />
            </div>
            <div className="addPostBottom">
                <img src="./images/c++.jpg" alt="" className="mainpics" />
                <div className="addPostOption">
                </div>
                <h2 className='price'>Buy now : &nbsp;&nbsp; $ 18</h2>
            </div>
        </div>



        <div className="addPostContainer">
            <div className="addPostTop">
                <h2 className='name'>Django</h2>
                <br />
            </div>
            <div className="addPostBottom">
            <img src="./images/Django.jpg" alt="" className="mainpics" />
                <div className="addPostOption">   
                </div>
                <h2 className='price'>Buy now :&nbsp;&nbsp;  $ 18</h2>
            </div>
        </div>


        <div className="addPostContainer">
            <div className="addPostTop">
                <h2 className='name'>Html & css</h2>
                <br />
                </div>
                <div className="addPostBottom">
                <img src="./images/html.jpg" alt="" className="mainpics" />
                <div className="addPostOption">    
            </div>
            <h2 className='price'>Buy now :&nbsp;&nbsp;  $ 18</h2>
            </div>
        </div>



        <div className="addPostContainer">
            <div className="addPostTop">
                <h2 className='name'>Java</h2>
                <br />
            </div>
            <div className="addPostBottom">
                <img src="./images/Java.jpg" alt="" className="mainpics" />
                <div className="addPostOption">
                </div>
                <h2 className='price'>Buy now :&nbsp;&nbsp;  $ 18</h2>
            </div>
        </div>


        <div className="addPostContainer">
            <div className="addPostTop">
                <h2 className='name'>Python</h2>
                <br />
            </div>
            <div className="addPostBottom">
                <div className="addPostOption">
                    <img src="./images/python.jpg" alt="" className="mainpics" />   
                </div>
                <h2 className='price'>Buy now :&nbsp;&nbsp;  $ 18</h2>
            </div>
        </div>



        <div className="addPostContainer">
            <div className="addPostTop">
                <h2 className='name'>JavaScript</h2>
                <br />
            </div>
            <div className="addPostBottom">
                <div className="addPostOption">
                    <img src="./images/js.png" alt="" className="mainpics" />    
                </div>
                <h2 className='price'>Buy now :&nbsp;&nbsp;  $ 18</h2>
            </div>
        </div>


        
    </div>
  )
}
