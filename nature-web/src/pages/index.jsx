import AboutContainer from "../containers/AboutContainer";
import BlogsContainer from "../containers/BlogsContainer";
import ContactContainer from "../containers/ContactContainer";
import HomeContainer from "../containers/HomeContainer";
import ProductContainer from "../containers/ProductContainer";
import ServiceContainer from "../containers/ServiceContainer";


const HomePage=()=>{
    return <HomeContainer />
};
const AboutPage=()=>{
    return <AboutContainer />
};

const ContactPage=()=>{
    return <ContactContainer />
};

const ProductPage=()=>{
    return <ProductContainer />
};

const ServicePage=()=>{
    return <ServiceContainer/>
}

const BlogPage=()=>{
    return <BlogsContainer/>
}


export{
    HomePage,
    AboutPage,
    ContactPage,
    BlogPage,
    ServicePage,
    ProductPage,
};


