import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../../api/UserApi";
import "./FollowingsCardProfile.css";
import userImagePlaceholder from "../../images/user image placeholder.jpg";
import { useNavigate } from "react-router-dom";

const FollowingsCardProfile = ({ userId }) => {
	const navigate = useNavigate();

	// Get the user details using id
	const [user, setUser] = useState({});
	useEffect(() => {
		const fetchUser = async () => {
			const res = await getUser(userId);
			setUser(res.data);
		};
		fetchUser();
	}, [userId]);

	// Function to redirect to user page
	const handleClick = () => {
		navigate(`/profile/${userId}`);
	};

	return (
		<div className="followingsCard__profile" onClick={handleClick}>
			<div className="followingsCard__profile--image">
				<img
					src={user.profilePhoto ? user.profilePhoto : userImagePlaceholder}
					alt="profileimage"
				/>
			</div>
			<p className="followingsCard__profile--name">{user.username}</p>
		</div>
	);
};

export default FollowingsCardProfile;
