export class ClientService {
    private clients: any[] = [];

    public createClient(clientData: any): any {
        const newClient = { id: this.clients.length + 1, ...clientData };
        this.clients.push(newClient);
        return newClient;
    }

    public getClients(): any[] {
        return this.clients;
    }

    public getClientById(clientId: number): any | undefined {
        return this.clients.find(client => client.id === clientId);
    }

    public updateClient(clientId: number, updatedData: any): any | undefined {
        const clientIndex = this.clients.findIndex(client => client.id === clientId);
        if (clientIndex !== -1) {
            this.clients[clientIndex] = { ...this.clients[clientIndex], ...updatedData };
            return this.clients[clientIndex];
        }
        return undefined;
    }

    public deleteClient(clientId: number): boolean {
        const clientIndex = this.clients.findIndex(client => client.id === clientId);
        if (clientIndex !== -1) {
            this.clients.splice(clientIndex, 1);
            return true;
        }
        return false;
    }
}