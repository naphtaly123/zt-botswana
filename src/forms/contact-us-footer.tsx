function contactUsFooter() {
    return(
        <>
        <form action="http://127.0.0.1:8000/">
            <input type="text" name="name" placeholder="Name"/>
            <input type="email" name="email" placeholder="Email"/>
            <textarea name="message" placeholder="Message"/>
            <button type="submit">Send</button>
        </form>
        </>
    )
    
}
export default contactUsFooter
