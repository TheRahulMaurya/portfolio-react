import Card from "../Global/Card"
import './Explore.css'

const Explore = () => {
    return(
        <section className="explore">
            <h1 className="explore-heading"> Hey! Here You Can Explore About My Quality Of Work</h1>
            <div className="card-container">
                <Card 
                    icon="server-outline"
                    heading="Highly Optimized"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                />

                <Card 
                    icon="terminal-outline"
                    heading="High Quality"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                />

                <Card 
                    icon="layers-outline"
                    heading="Moduler & Reusable"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                />

                <Card 
                    icon="trending-up-outline"
                    heading="Highly Scalable"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                />
            </div>
            
        </section>
    )
}

export default Explore;