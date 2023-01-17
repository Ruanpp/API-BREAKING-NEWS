import userService from "../services/user.service.js";

const create = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;

        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).send({ massage: "Submit all fields for registration" })
        }

        const user = await userService.createService(req.body);
        if (!user) {
            return res.status(400).send({ massage: "Error creating User" });
        }

        res.status(201).send({
            massege: "User created successfully",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
                background,
            },
        });
    } catch (err) {
        res.status(500).send({ message: err.massage })
    };
};

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService();

        if (users.length === 0) {
            return res.status(400).send({ massage: "There are no registred users" });
        }

        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.massage })
    };
};

const findById = async (req, res) => {

    try {
        const user = req.user;


        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.massage })
    };
};

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;
        if (!name && !username && !email && !password && !avatar && !background) {
            res.status(400).send({ massage: "Submit at least one fild for update" })
        }

        const { id, user } = req;



        await userService.updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        );

        res.send({ message: "User successfully updated!" });
    } catch (err) {
        res.status(500).send({ message: err.massage })
    };

};

export default { create, findAll, findById, update };