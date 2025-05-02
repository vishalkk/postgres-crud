import pool from '../db/pool.js';


export const getAllUsers = async (req, res) => {
    const result = await pool.query('SELECT * FROM users');

    res.status(200).json(result.rows);
    return result.rows;
}

export const getUserById = async (req, res) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1",[id]);
    return result.rows[0];
};


export const createUser = async (req, res) => { 
    const { name, email } = req.body;
    const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        [name, email]);

        return result.rows[0];
    };

    export const updateUser = async (req, res) => {
        const { id } = req.params;
        const { name, email } = req.body;
        const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id]);
        return result.rows[0];
    }

    export const deleteUser = async (req, res) => {
        const { id } = req.params;
        const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *",
            [id]);
        return result.rows[0];
    }