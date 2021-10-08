type Area = {
    code: string;
    assets_present: string[];
    last_asset_entered?: string;
    last_asset_left?: string;
    warning_issued: boolean;
    average_asset_processing_time_seconds: number;
  };
  
  export const mockedAreasData: Area[] = [
    {
      code: 'ALCA',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      warning_issued: false,
      average_asset_processing_time_seconds: 1040,
    },
    {
      code: 'TSCA',
      assets_present: [
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTMyMQ==',
      ],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      warning_issued: false,
      average_asset_processing_time_seconds: 4000,
    },
    {
      code: 'SHCC',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ARHD',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'RHD',
      assets_present: [
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
      ],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'AMCI',
      assets_present: ['10'],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'CIRE',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: '60P3',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ASTA',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ALMA',
      assets_present: [
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
      ],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'CHCC',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'SPCA',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'EGRE',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ETIN',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'MROB',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'TABL',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'BAVO',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'DACQ',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'RETM',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'SMAS',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ATRA',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'APAP',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'AET1',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'AET2',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'VIDA',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: 7,
    },
    {
      code: 'PAAL',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ALA1',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: 9,
    },
    {
      code: 'ALA2',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -7,
    },
    {
      code: 'CHA2',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'TRCO',
      assets_present: [
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
      ],
      warning_issued: true,
      average_asset_processing_time_seconds: 8,
    },
    {
      code: 'HLA1',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ATRC',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'TCL2',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'LAQ1',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'LAQ2',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'TSTL',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'STOL',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'CQRP',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'SV3L',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ATC1',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ERET',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ZQSE',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'EVAP',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ARET',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'BOUT',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'FRET',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'FIP2',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'FIP1',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'PEXT',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'SMPR',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ATC2',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ZCQS',
      assets_present: [
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
        'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ==',
      ],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: 7,
    },
    {
      code: 'ZCPP',
      assets_present: [],
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ZRTO',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ZRPO',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ZRNO',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'ZTCP',
      assets_present: [],
      warning_issued: true,
      average_asset_processing_time_seconds: -1,
    },
    {
      code: 'AMTK',
      assets_present: ['aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTIwLTAxOQ=='],
      last_asset_entered: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
      last_asset_left: 'aW8ucmVmbGVrOi9hc3NldHMvRkFCRVgwL2V4dGVybmFsL1BTRlYvUk1TL0ZWRUhfQkFTRS80MTUwMDAyLTQtMDE5',
  
      warning_issued: false,
      average_asset_processing_time_seconds: -1,
    },
  ];
  