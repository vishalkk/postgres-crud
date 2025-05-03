import {
    getAllUsersService,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService
  } from '../models/userModel.js';
//Standardized response format


export const handleResponse = (res, status, message, data) => {
    return res.status(status).json({
        status,
        message,
        data
    });
}
// //Standardized error response format
// export const errorResponse = (res, status, message, error) => {
//     return res.status(status).json({
//         status,
//         message,
//         error
//     });
// }

// //Standardized success response format
// export const successResponse = (res, status, message, data) => {
//     return res.status(status).json({
//         status,
//         message,
//         data
//     });
// }
export const createUser= async(req,res,next)=>{
    const { name, email } = req.body;
    try {
        const newUser = await userModel.createUserService(name, email);
        handleResponse(res, 201, 'User created successfully', newUser);
    } catch (error) {
        next(error);
    }
}

export const getAllUsers = async (req, res) => {

   try{
    const newUser = await userModel.getAllUsersService();
    handleResponse(res, 200, 'Users retrieved successfully', newUser);
   } catch(error){
    next(error);
   }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.getUserByIdService(id);
        if (!user) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User retrieved successfully', user);
    } catch (error) {
        next(error);
    }
}
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const updatedUser = await userModel.updateUserService(id, name, email);
        if (!updatedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User updated successfully', updatedUser);
    } catch (error) {
        next(error);
    }
}
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await userModel.deleteUserService(id);
        if (!deletedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User deleted successfully', deletedUser);
    } catch (error) {
        next(error);
    }
}