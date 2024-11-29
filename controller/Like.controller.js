import * as likeService from '../services/Like.service.js';

export const addLike = async (req, res) => {
    try {
        const like = await likeService.addLike(req.body);
        res.status(201).json(like);
    } catch (error) {
        console.error('Error adding like:', error);
        res.status(500).json({ error: error.message });
    }
};

export const removeLike = async (req, res) => {
    try {
        await likeService.removeLike(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getLikesByRestaurant = async (req, res) => {
    try {
        const likes = await likeService.getLikesByRestaurant(req.params.res_id);
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};