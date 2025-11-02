import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';

const StatisticsSection = () => {
  const populationData = [
    { year: '2018', population: 2150 },
    { year: '2019', population: 2200 },
    { year: '2020', population: 2250 },
    { year: '2021', population: 2280 },
    { year: '2022', population: 2320 },
    { year: '2023', population: 2350 }
  ];

  const occupationData = [
    { name: 'शेती / Agriculture', value: 65, color: '#6b7f4b' },
    { name: 'व्यापार / Business', value: 15, color: '#e67e22' },
    { name: 'नोकरी / Service', value: 12, color: '#8b4513' },
    { name: 'इतर / Others', value: 8, color: '#9cb86f' }
  ];

  const infrastructureData = [
    // { category: 'शाळा\nSchools', count: 3 },
    { category: 'आरोग्य केंद्र', count: 1 },
    { category: 'मंदिरे', count: 6 },
    { category: 'पाणी टाक्या', count: 2 },
    // { category: 'रस्ते (किमी)\nRoads (km)', count: 12 } 

  ];

  const COLORS = ['#6b7f4b', '#e67e22', '#8b4513', '#9cb86f'];

  return (
    <section style={{
      padding: 'var(--spacing-3xl) 0',
      background: 'linear-gradient(135deg, var(--village-cream), white)'
    }}>
      <div className="container">
        <div className="section-header">
         
          <h2 className="gradient-text" style={{
            fontSize: 'var(--font-size-4xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            आकडेवारी
          </h2>
          <p style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-lg)' }}>
            Village Statistics
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Statistics Cards */}
        <div className="grid md-grid-cols-2 lg-grid-cols-4" style={{ gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-3xl)' }}>
          <div className="card" style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--village-green), var(--village-light-green))',
            color: 'white'
          }}>
            <h3 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: 'white', marginBottom: 'var(--spacing-sm)' }}>
              2,350
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0' }}>
              एकूण लोकसंख्या<br />Total Population
            </p>
          </div>

          <div className="card" style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--village-orange), #f39c12)',
            color: 'white'
          }}>
            <h3 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: 'white', marginBottom: 'var(--spacing-sm)' }}>
              500
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0' }}>
              कुटुंबे<br />Families
            </p>
          </div>

          <div className="card" style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--village-brown), #a0522d)',
            color: 'white'
          }}>
         
            <h3 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: 'white', marginBottom: 'var(--spacing-sm)' }}>
              1,200
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0' }}>
              एकर शेतजमीन<br />Acres Farmland
            </p>
          </div>

          <div className="card" style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--village-light-green), var(--village-green))',
            color: 'white'
          }}>
            <h3 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: 'white', marginBottom: 'var(--spacing-sm)' }}>
              95%
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0' }}>
              साक्षरता दर<br />Literacy Rate
            </p>
          </div>
        </div>

        {/* Charts Grid */}
           {/* Population Growth Chart */}
          <div className="doublediv">
   <div className="chart-container">
            <h3 style={{
              color: 'var(--village-green)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: '600',
              marginBottom: 'var(--spacing-md)',
              textAlign: 'center'
            }}>
              लोकसंख्या वाढ / Population Growth
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={populationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--village-cream)',
                    border: '1px solid var(--village-green)',
                    borderRadius: 'var(--border-radius-md)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="population" 
                  stroke="var(--village-green)" 
                  strokeWidth={3}
                  dot={{ fill: 'var(--village-orange)', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Occupation Distribution */}
          <div className="chart-container">
            <h3 style={{
              color: 'var(--village-green)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: '600',
              marginBottom: 'var(--spacing-md)',
              textAlign: 'center'
            }}>
              व्यवसाय वितरण / Occupation Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={occupationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {occupationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--village-cream)',
                    border: '1px solid var(--village-green)',
                    borderRadius: 'var(--border-radius-md)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          </div>
        <div className="grid lg-grid-cols-2 " style={{ gap: 'var(--spacing-2xl)' }}>
      
       

          {/* Infrastructure Count */}
          <div className="chart-container" style={{ gridColumn: 'span 2' }}>
            <h3 style={{
              color: 'var(--village-green)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: '600',
              marginBottom: 'var(--spacing-md)',
              textAlign: 'center'
            }}>
              पायाभूत सुविधा / Infrastructure
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={infrastructureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--village-cream)',
                    border: '1px solid var(--village-green)',
                    borderRadius: 'var(--border-radius-md)'
                  }}
                />
                <Bar dataKey="count" fill="var(--village-green)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Info */}
        <div className="card card-glass" style={{ marginTop: 'var(--spacing-2xl)', textAlign: 'center' }}>
          <h3 style={{
            color: 'var(--village-green)',
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            मुख्य उपलब्धी / Key Achievements
          </h3>
          <div className="grid md-grid-cols-3" style={{ gap: 'var(--spacing-lg)' }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>🏆</div>
              <h4 style={{ color: 'var(--village-green)', marginBottom: 'var(--spacing-xs)' }}>
                सर्वोत्तम गाव पुरस्कार
              </h4>
              <p style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-sm)', margin: '0' }}>
                Best Village Award 2023
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>💧</div>
              <h4 style={{ color: 'var(--village-green)', marginBottom: 'var(--spacing-xs)' }}>
                100% पाणी पुरवठा
              </h4>
              <p style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-sm)', margin: '0' }}>
                Complete Water Supply Coverage
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>🌱</div>
              <h4 style={{ color: 'var(--village-green)', marginBottom: 'var(--spacing-xs)' }}>
                हरित गाव प्रमाणपत्र
              </h4>
              <p style={{ color: 'var(--village-brown)', fontSize: 'var(--font-size-sm)', margin: '0' }}>
                Green Village Certification
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;