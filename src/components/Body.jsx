import '../globalStyles.css'
import Photo from './Photo/Photo'

function Body() {


    const photos = [
        {
            id : 1,
            author : "Leonardo Espinosa",
            preview : "https://images.unsplash.com/photo-1664164236867-12d1f986ac41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo1.jpg"
        },
        {
            id : 2,
            author : "Derek Duran",
            preview : "https://images.unsplash.com/photo-1664176062054-715f89b1974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo2.jpg"
        },
        {
            id : 3,
            author : "Laura Lefurgey-Smith",
            preview : "https://images.unsplash.com/photo-1662943808230-94547dc5eda3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo3.jpg"
        },
        {
            id : 4,
            author : "Edward Virvel",
            preview : "https://images.unsplash.com/photo-1664234515723-a2ff07eedbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo4.jpg"
        },
        {
            id : 5,
            author : "Claudio Schwarz",
            preview : "https://images.unsplash.com/photo-1661713979793-fd2fa1ff904d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo5.jpg"
        },
        {
            id : 6,
            author : "Klara Kulikova",
            preview : "https://images.unsplash.com/photo-1664236731665-b0d6b176d45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo6.jpg"
        },
        {
            id : 7,
            author : "Peter Borter",
            preview : "https://images.unsplash.com/photo-1657299156725-dc862fea3e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo7.jpg"
        },
        {
            id : 8,
            author : "Dan Smedley",
            preview : "https://images.unsplash.com/photo-1664236731665-b0d6b176d45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo8.jpg"
        },
        {
            id : 9,
            author : "Grant Jacobson",
            preview : "https://images.unsplash.com/photo-1664259745571-20856e92880e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo9.jpg"
        },
        {
            id : 10,
            author : "Kayla Koss",
            preview : "https://images.unsplash.com/photo-1664234515723-a2ff07eedbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo10.jpg"
        },
        {
            id : 11,
            author : "Kenia Robles",
            preview : "https://images.unsplash.com/photo-1664052962163-cda35c9b4266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo10.jpg"
        },
        {
            id : 12,
            author : "Dan Smedley",
            preview : "https://images.unsplash.com/photo-1664055258377-712865beb272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo10.jpg"
        },
        {
            id : 13,
            author : "Adal Estudillo",
            preview : "https://images.unsplash.com/photo-1664155942208-a4792a4be4a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo10.jpg"
        },
        {
            id : 14,
            author : "Michael Oorg",
            preview : "https://images.unsplash.com/photo-1664171122063-4685b3511c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo10.jpg"
        },
        {
            id : 15,
            author : "Gabriel Flores",
            preview : "https://images.unsplash.com/photo-1664171997003-9f568f0292a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            photo : "../../public/images/photos/photo10.jpg"
        }

    ]


    return (
        <>
            <div className='body-container'>
            {
                photos.map( (photo) => {
                    return(
                        <Photo url={photo.preview} author={photo.author} />
                    )

                })
            }

          
                
            </div>
        </>
    )

}


export default Body