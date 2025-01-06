export class MasterOwnerService {
    private masterOwners: any[] = [];

    createMasterOwner(data: any) {
        const newMasterOwner = {
            id: this.masterOwners.length + 1,
            ...data
        };
        this.masterOwners.push(newMasterOwner);
        return newMasterOwner;
    }

    getMasterOwner(id: number) {
        return this.masterOwners.find(owner => owner.id === id);
    }

    getAllMasterOwners() {
        return this.masterOwners;
    }

    updateMasterOwner(id: number, data: any) {
        const index = this.masterOwners.findIndex(owner => owner.id === id);
        if (index !== -1) {
            this.masterOwners[index] = { ...this.masterOwners[index], ...data };
            return this.masterOwners[index];
        }
        return null;
    }

    deleteMasterOwner(id: number) {
        const index = this.masterOwners.findIndex(owner => owner.id === id);
        if (index !== -1) {
            return this.masterOwners.splice(index, 1);
        }
        return null;
    }
}