

const TopicProps = (props)=>{
   console.log(props)

    const getVal = (e)=>{
       
        let result = e.target.value
        props.updatedVal(result)
    }

    return(
    <>
    <h1>{props.initialVal}</h1>
    <input type="text" placeholder="Enter Value" onChange={getVal} />
    </>
    )
}
export default  TopicProps