'use client';

const Clients = () => {
  const clientLogos = [
    { name: 'Microsoft', logo: '/assets/clients/microsoft.svg' },
    { name: 'Google', logo: '/assets/clients/google.svg' },
    { name: 'Amazon', logo: '/assets/clients/amazon.svg' },
    { name: 'IBM', logo: '/assets/clients/ibm.svg' },
    { name: 'Oracle', logo: '/assets/clients/oracle.svg' },
    { name: 'Salesforce', logo: '/assets/clients/salesforce.svg' },
    { name: 'SAP', logo: '/assets/clients/sap.svg' },
    { name: 'Deloitte', logo: '/assets/clients/deloitte.svg' },
    { name: 'Accenture', logo: '/assets/clients/accenture.svg' },
    { name: 'KPMG', logo: '/assets/clients/kpmg.svg' }
  ];

  return (
    <section className="clients">
      <div className="clients-container">
        <div className="title-section">
          <span className="subtitle">Our Clients</span>
          <h2 className="text-white text-xl font-bold">Trusted by Skill Desk</h2>
        </div>
        
        <div className="logos-container">
          <div className="logos-track">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div key={`client-1-${index}`} className="logo-item">
                <div className="logo-wrapper">
                  <span className="client-name">{client.name}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div key={`client-2-${index}`} className="logo-item">
                <div className="logo-wrapper">
                  <span className="client-name">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;