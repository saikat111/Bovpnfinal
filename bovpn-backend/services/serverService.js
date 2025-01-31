const Server = require('../models/serverModel');

exports.getAllServers = async () => {
    try {
        const servers = await Server.find(); // Fetch all servers from the database
        if (!servers || servers.length === 0) {
            throw new Error('No servers found in the database');
        }
        return servers;
    } catch (err) {
        console.error('Error fetching server list:', err.message);
        // Throw a more specific error with details
        throw new Error(`Error fetching server list: ${err.message || 'Unknown error'}`);
    }
};


exports.getServerById = async (serverId) => {
    try {
        const server = await Server.findById(serverId); // Fetch server by ID
        return server;
    } catch (err) {
        throw new Error('Error fetching server details');
    }
};

exports.connectToServerService = async (serverId, userId) => {
    try {
        const server = await this.getServerById(serverId);
        if (!server) {
            throw new Error('Server not found');
        }
        return {
            connectionId: `conn-${userId}-${serverId}`,
            ipAddress: '192.168.1.1', // In reality, this should come from your server setup
            port: '8080' // Similarly, the port should be dynamically determined
        };
    } catch (err) {
        throw new Error('Error connecting to server');
    }
};
