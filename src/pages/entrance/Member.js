import PropTypes from "prop-types";

export default function Member({name,surname,isLoggedIn,age,nakamatachi,address}) {

    if (!isLoggedIn) {
        return <div>Giriş yapmadınız</div>
    }
   return (
    <div> 
        <h1>
            {surname} {name} {age}
           </h1>   
           {address.title}{address.bounty}
           {nakamatachi &&
            nakamatachi.map((nakama)=><h2 key={nakama.id} > {nakama.id}-{nakama.name}</h2>)
           }
      
    </div>
   )
}
Member.propTypes={
    name: PropTypes.string.isRequired,
    surname :PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    age :PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    nakamatachi :PropTypes.array,
    address : PropTypes.shape({
        title:PropTypes.string.isRequired,
        bounty:PropTypes.number
        
    })
}
Member.defaultProps={
    isLoggedIn:false,
    name:"isimsiz"
}
