import pool from '../config/db.js';

// import pool from '../db/pool.js';


export const getAllUsersService = async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
   console.log(result.rows);
    return result.rows;
}

export const getUserByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1",[id]);
    return result.rows[0];
};


export const createUserService = async (name, email) => { 
    const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        [name, email]);

        return result.rows[0];
    };

    export const updateUserService = async (id,name,email) => {
        // const { id } = req.params;
        // const { name, email } = req.body;
        const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id]);
        return result.rows[0];
    }

    export const deleteUserService = async (id, res) => {
        const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *",
            [id]);
        return result.rows[0];
    }