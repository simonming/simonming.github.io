$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/work-1.jpeg',
            link: 'https://github.com/abhn/Mporter',
            title: 'Mporter',
            demo: false,
            technologies: ['Flask', 'Celery', 'Python'],
            description: "Flask web application for easy reporting updates to one's mentor. Multi-user support, easy to deploy and use.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/work-2.jpeg',
            link: 'https://github.com/abhn/Wall-E',
            title: 'Wall-E',
            demo: false,
            technologies: ['Semantic UI', 'Jekyll'],
            description: "A modern Jekyll theme with grid frontpage, beautiful typography, mobile responsive, made with Semantic UI.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/work-3.jpeg',
            link: 'https://github.com/abhn/Marvel',
            title: 'Marvel',
            demo: false,
            technologies: ['Android', 'OpenCV'],
            description: "Attendance marking tool that uses face recognition for marking attendance and firebase for tracking and analytics.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/work-6.jpeg',
            link: 'https://github.com/abhn/mpw',
            title: 'Master Password',
            demo: false,
            technologies: ['Semantic UI', 'CSS3'],
            description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/work-4.jpeg',
            link: 'https://github.com/abhn/Social-Share-Counts',
            title: 'Social Share Count',
            demo: false,
            technologies: ['Python'],
            description: "Ever wondered how many times a URL has been shared on popular social networks?",
            categories: ['native']
        },
        {
            image: 'assets/images/work-5.jpeg',
            link: 'https://github.com/abhn/data-destroyer-gui',
            title: 'Data Destroyer',
            demo: false,
            technologies: ['C++', 'Qt'],
            description: "Native GUI wrapper for GNU coreutils tool 'dd'",
            categories: ['native']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                    </div>`           
                : ''}
        
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}