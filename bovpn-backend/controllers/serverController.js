const { getAllServers, getServerById, connectToServerService } = require('../services/serverService');

exports.getServerList = async (req, res) => {
    try {
        const servers = await getAllServers();
        res.json(servers); // Send list of servers as response
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.getServerDetails = async (req, res) => {
    const { serverId } = req.params;
    try {
        const server = await getServerById(serverId);
        if (!server) {
            return res.status(404).send({ message: 'Server not found' });
        }
        res.json(server); // Send server details as response
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.connectToServer = async (req, res) => {
    const { serverId } = req.params;
    const { userId } = req.body;
    try {
        const connectionDetails = await connectToServerService(serverId, userId);
        res.json(connectionDetails); // Send connection details as response
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
