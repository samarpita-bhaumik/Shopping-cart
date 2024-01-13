import './App.css';
const Profile = () =>{
    
    return(
        <>
        <div class="profile-container">
        <div class="profile-picture">
            <img src={require('./resources/ProfileImage.jpg')} alt="Profile Picture"/>
        </div>

        <div class="user-info">
            <h2>Samarpita Bhaumik</h2>
            <p><b>Email:</b> sam@gmail.com</p>
            <p><b>Location:</b> Habra, India</p>
        </div>

        <button class="edit-button" onclick="editProfile()">Edit</button>
    </div>
        </>
    )
}

export default Profile;