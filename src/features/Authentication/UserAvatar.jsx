export default function UserAvatar() {
    return (
        <div className="flex justify-center items-center space-x-3 pr-3">
            <img
                className="w-15 h-15 rounded-full object-center outline-gray-700 object-cover"
                src='./avatar2.jpg'
                alt='userAvatart'
            />
            <h3>Welcome Shehnaz</h3>
        </div>
    )
}