import ThingCard from '../../components/ThingCard/ThingCard'

    import { Link } from 'react-router-dom'

    const RandomThings = (props) => {
      return (
        <>
          <h1>Chris's Things</h1>
          <Link to="/">Home</Link>

          {props.things.map((thing, idx) => 
            <ThingCard key={idx} thing={thing}/>
          )}
        </>
      )
    }

    export default RandomThings