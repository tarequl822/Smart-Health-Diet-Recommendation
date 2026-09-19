import supabase from "../config/supabase.js";
import pool from "../config/db.js";

export const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization token required"
            });
        }

        const token = authHeader.split(" ")[1];

        // Verify token with Supabase Auth
        const {
            data,
            error
        } = await supabase.auth.getUser(token);

        if (error || !data.user) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token"
            });
        }

        // Get application account
        const result = await pool.query(
            `
            SELECT
                id,
                full_name,
                email,
                role,
                status
            FROM accounts
            WHERE id = $1
            `,
            [data.user.id]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Account not found"
            });
        }

        const account = result.rows[0];

        if (account.status !== "active") {
            return res.status(403).json({
                success: false,
                message: "Account is inactive"
            });
        }

        // Attach authenticated user
        req.user = data.user;

        // Attach application account
        req.account = account;

        next();

    } catch (error) {
        console.error("Authentication error:", error);

        return res.status(500).json({
            success: false,
            message: "Authentication failed"
        });
    }
};