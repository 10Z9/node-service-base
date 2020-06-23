interface ConnectOption {
  url?: string;
}

interface DBConnector {
  connect: (config: ConnectOption) => Promise<void>;
  close: () => Promise<void>;
}

export default DBConnector;
