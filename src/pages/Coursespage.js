import React, { useEffect, useState } from 'react';

export default function Coursespage() {
    const [courses, setCourses] = useState("");

    useEffect(() => fetch('https://lewisjluck.pythonanywhere.com/get_courses')
        .then(response => response.json())
        .then(data => setCourses(data)), []);

    return (
        <div>
            Courses page
            {courses}
        </div>
    );
}
