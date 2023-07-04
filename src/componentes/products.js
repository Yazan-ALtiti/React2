import React from "react";
import '../componentes/prouduct.css';

function MyProduct() {
    const CourseNameList = [
        {
            name: "React.js",
            price: 199.99,
        },
        {
            name: "Flutter",
            price: 149.99,
        },
        {
            name: "QA Testing",
            price: 99.99,
        },
        {
            name: "Python Programming",
            price: 179.99,
        },
        {
            name: "JavaScript Basics",
            price: 79.99,
        },
        {
            name: "node JS",
            price: 200,
        },
        {
            name: "digital marketing",
            price: 99,
        },
        {
            name: "node js",
            price:222,
        },
    ];

    const CourseMap = CourseNameList.map((course) => (
        <div>
            <p id="course- name">{course.name}</p>
            <b id="price">{course.price}</b>
        </div>
    ));
    



    //console.log(CorseMap)
    return (
        <div>
            {CourseMap.map((CoruseName, index) => (
                <div  key={index}>
                    {CoruseName}





                </div>
            ))};
                </div>
    );
    

            

            
}

export default MyProduct;