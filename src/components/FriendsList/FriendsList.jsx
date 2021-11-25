import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { friendsSelector } from '../../Store/Friends/selectors';
import { getFriendsRequestWithThunk } from '../../Store/Friends/action';
import './FriendsList.css';


export const FriendsList = () => {
    const dispatch = useDispatch();
    const {loading, error, dogs} = useSelector(friendsSelector)

    const handleGetFriends = () => {
        dispatch(getFriendsRequestWithThunk())
    }

    useEffect(() => {
        handleGetFriends()
    }, [])

    if(loading) return <CircularProgress></CircularProgress>

    if(error) {
        return (
            <div>
                <div>Ошибка загрузки</div>
                <button onClick={handleGetFriends}>Попробовать снова</button>
            </div>
        )
    }

    return(
        <div>
            {dogs.map((dog) => (
                <div key={dog}>{dog}</div>
            ))}
        </div>
    )
}
