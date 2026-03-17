const SvgFilters = () => {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}>
      <defs>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq">
          <feColorMatrix
            values="1 0 0 0 0 
                  0 1 0 0 0 
                  0 0 1 0 0 
                  0 0 0 9 0"
          ></feColorMatrix>
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq2">
          <feColorMatrix
            values="1 0 0 0 0 
                  0 1 0 0 0 
                  0 0 1 0 0 
                  0 0 0 3 0"
          ></feColorMatrix>
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq3">
          <feColorMatrix
            values="1 0 0 0.2 0 
                  0 1 0 0.2 0 
                  0 0 1 0.2 0 
                  0 0 0 2 0"
          ></feColorMatrix>
        </filter>
      </defs>
    </svg>
  );
};

export default SvgFilters;
