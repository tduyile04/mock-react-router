let instances = [];

export const register = (comp) => instances.push(comp);
export const unregister = (comp) => instances.splice(instances.indexOf(comp), 1);

export instances;
