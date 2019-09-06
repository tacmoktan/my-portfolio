//project images
import HamroJob from '../../assets/projectImages/hamrojob.jpg';
import MeroPasal from '../../assets/projectImages/meropasal.jpg';
import CurrentWeather from '../../assets/projectImages/currentweather.jpg';
import KhajaSet from '../../assets/projectImages/khajaset.jpg';

const projectDescription = [
    {
        title: 'HamroJob (Frontend)',
        languageIcons: [
            'devicon-react-original-wordmark colored',
        ],
        type: 'Academic',
        sources: [
            {
                title: 'github',
                link:'https://github.com/tacmoktan/ProjectFrontEnd',
            },
            {
                title:'netlify',
                link:'https://final-project-trinity.netlify.com'
            }
        ], imageUrl: HamroJob
    },
    {
        title: 'MeroPasal (Frontend)',
        languageIcons: [
            "devicon-html5-plain-wordmark colored",
            "devicon-css3-plain-wordmark colored",
            "devicon-javascript-plain colored"
        ],
        type: 'Personal', 
        sources: [
            {
                title: 'github',
                link:'https://github.com/tacmoktan/MeroPasal-frontend',
            },
            {
                title:'netlify',
                link:'http://meropasal.netlify.com/'
            }
        ], imageUrl: MeroPasal
    },
    {
        title: 'CurrentWeather App',
        languageIcons: [
            "devicon-html5-plain-wordmark colored",
            "devicon-css3-plain-wordmark colored",
            "devicon-javascript-plain colored"
        ],
        type: 'Personal', 
        sources: [
            {
                title: 'github',
                link:'https://tacmoktan.github.io/CurrentWeatherApp/',
            }
            
        ], imageUrl: CurrentWeather
    },
    {
        title: 'KhajaSet',
        languageIcons: [
            "devicon-html5-plain-wordmark colored",
            "devicon-css3-plain-wordmark colored",
            "devicon-bootstrap-plain-wordmark colored",
            "devicon-mysql-plain-wordmark colored",
            "devicon-php-plain colored"
        ], type: 'Academic', 
        sources: [
            {
                title: 'github',
                link:'https://github.com/tacmoktan/Khaja-Set',
            }
        ], imageUrl: KhajaSet
    },
]

export default projectDescription;