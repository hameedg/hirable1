const CompanyCard = ({
  logo,
  name,
  location,
  assignment,
  openings,
  onShowDescription,
  index,
}) => {
  const temp =
    location.length > 0
      ? {
          city: location[0].city,
          state: location[0].state && location[0].state,
          country:
            (!location[0].city || !location[0].state) && location[0].country,
        }
      : null;
  const companyLocation =
    temp &&
    `${temp.city ? `${temp.city}, ` : ''}${
      temp.state ? `${temp.state}${temp.country ? ', ' : ''}` : ''
    }${temp.country ? `${temp.country}` : ''}`;
  return (
    <button
      type="button"
      className="flex w-full bg-white text-left select-none h-fit pb-7 rounded-md border flax flex-col"
      // onClick={() => onShowDescription(index)}
    >
      <div className="pt-6 pb-3 px-4 border-b">
        <div className="flex justify-between mb-2.5 gap-[65px]">
          <div className="w-[90px] h-[90px]">
            <img className="rounded-lg" src={logo} alt="logo" />
          </div>
          <div className="border rounded-md bg-gray-100 p-2 px-3">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="w-4 h-4 fill-current text-[#FFD700] font-black"
                viewBox="0 0 482.829 482.829"
              >
                <path d="M8.538,201.486c39.093,35.828,80.379,68.967,125.332,97.159c-14.82,50.318-30.976,100.194-48.287,149.715    c-3.171,9.074,2.963,15.34,10.296,16.747c3.671,2.233,8.34,2.498,13.114-0.909c43.445-31.026,88.065-60.352,132.004-90.678    c44.43,32.646,87.856,66.618,134.387,96.289c10.308,6.581,20.017-2.316,20.626-11.781c0.513-2.062,0.6-4.347-0.025-6.865    c-12.288-49.982-26.726-99.224-48.905-145.677c47.728-30.499,86.34-72.39,130.864-107.191c8.353-6.525,4.905-15.965-2.194-20.467    c-2.254-2.892-5.737-4.883-10.526-4.883H315.296c-20.043-50.403-40.497-100.633-56.782-152.418    c-4.845-15.419-27.048-11.077-27.683,2.453c-23.354,49.835-44.788,100.399-57.262,154.094    c-53.349-0.338-106.676-2.564-160.03-2.725C-2.674,174.301-4.307,196.771,8.538,201.486z M180.466,205.21    c1.236,0.005,2.371-0.147,3.435-0.386c6.21,0.898,12.637-1.919,14.3-9.912c9.569-45.907,26.052-89.261,45.011-131.809    c14.922,42.533,31.964,84.279,48.573,126.201c0.051,0.134,0.133,0.233,0.193,0.363c1.011,6.012,5.454,11.336,13.335,11.336    h125.649c-34.729,30.168-67.604,62.518-107.476,86.079c-2.955,1.747-4.829,4.042-5.84,6.546    c-2.498,3.844-3.271,8.841-0.594,14.051c19.393,37.795,32.575,77.855,43.574,118.662c-37.399-25.726-73.301-53.532-109.954-80.344    c-1.046-0.762-2.079-1.3-3.11-1.727c-3.781-2.641-8.752-3.22-13.858,0.325c-35.914,24.923-72.346,49.084-108.285,73.955    c13.363-39.694,25.989-79.617,37.714-119.83c1.872-6.423-0.645-11.466-4.801-14.421c-0.95-2.671-2.796-5.149-5.855-7.038    c-35.635-21.963-68.736-47.162-100.283-74.408C94.953,203.614,137.702,205.079,180.466,205.21z" />
              </svg>
              <div className="font-semibold text-gray-800 ml-1 text-xs tracking-tighter">
                Jobs & Assignments:
              </div>
            </div>
            <div className="text-xl font-semibold text-gray-900 mt-1">877</div>
            <div className="text-xs font-semibold text-gray-700 tracking-normal mt-0.5">
              Jobs
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl text-gray-900 tracking-[-0.02em] font-semibold mb-3 leading-[0.875rem]">
            {
              name
              /* {name.slice(0, 15)}
          {name.length > 15 && '...'} */
            }
          </div>
          <div className="tracking-tight  mb-2 leading-[0.875rem] text-gray-800 text-sm font-medium">
            The Companies Tagligne
          </div>
          {/* {location.length > 0 && (
          <div className="tracking-[-0.03em]  mb-2 leading-[0.875rem] text-gray-800 text-sm font-medium">
            {companyLocation.slice(0, 40)}
            {companyLocation.length > 40 && '...'}
          </div>
        )} */}
          {/* <div className="mb-2 leading-[0.875rem]">
          {assignment > 1 ? `${assignment} Assignments` : `1 Assignment`}
        </div> */}
          {/* <div className=" leading-[0.875rem] flex gap-1 text-sm font-normal text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-current text-gray-600"
            viewBox="0 0 17.924 17.924"
          >
            <polygon points="12.475,8.868 12.481,8.859 12.48,8.858   " />
            <path d="M17.211,10.107c0,0-0.183-0.249-0.616-0.415c0,0-0.036-0.011-0.092-0.029    c-0.386-0.181-0.752-0.297-0.752-0.297c-0.078-0.028-0.146-0.056-0.21-0.083c-0.261-0.13-0.45-0.279-0.45-0.279    s-0.002-0.002-0.203-0.203c0.361-0.374,0.626-0.882,0.709-1.368c0.064-0.066,0.129-0.172,0.157-0.341    c0.052-0.188,0.117-0.517,0.002-0.67c-0.007-0.008-0.013-0.015-0.02-0.022c0.108-0.396,0.246-1.214-0.244-1.772    c-0.044-0.056-0.318-0.384-0.906-0.558l-0.28-0.097c-0.463-0.143-0.754-0.174-0.766-0.176c-0.021-0.002-0.043,0-0.063,0.005    c-0.016,0.005-0.071,0.019-0.113,0.013c-0.111-0.016-0.277,0.041-0.307,0.053c-0.038,0.015-0.934,0.374-1.205,1.208    c-0.025,0.067-0.134,0.422,0.01,1.292c-0.021,0.014-0.04,0.032-0.058,0.054c-0.116,0.153-0.051,0.48,0.002,0.669    c0.027,0.167,0.092,0.272,0.155,0.339c0.072,0.48,0.302,0.942,0.605,1.296c0,0,0.23,0.398,0.259,0.435    c0.729,1.08,0.821,3.162,0.83,3.396l0.001,0.015l-0.001,0.016c-0.012,0.728-0.374,0.981-0.568,1.065    c-0.094,0.042-0.192,0.079-0.291,0.117c0.049-0.072,0.097-0.197,0.1-0.418c0,0-0.071-3.059-0.688-3.972    c0,0-0.176-0.24-0.593-0.399c0,0-0.034-0.011-0.089-0.028c-0.37-0.174-0.722-0.285-0.722-0.285    c-0.075-0.027-0.142-0.053-0.202-0.08c-0.25-0.125-0.433-0.268-0.433-0.268s-0.002-0.002-0.195-0.196    c0.347-0.36,0.602-0.848,0.681-1.314c0.063-0.063,0.125-0.166,0.152-0.328c0.049-0.181,0.112-0.497,0.001-0.644    c-0.006-0.007-0.012-0.014-0.018-0.021c0.104-0.381,0.236-1.167-0.235-1.704c-0.043-0.053-0.307-0.369-0.871-0.536l-0.27-0.092    C8.97,3.348,8.69,3.317,8.678,3.316c-0.02-0.002-0.041,0-0.061,0.006C8.601,3.326,8.549,3.34,8.508,3.335    c-0.106-0.016-0.266,0.039-0.294,0.05C8.178,3.399,7.317,3.744,7.056,4.546c-0.024,0.065-0.128,0.406,0.01,1.242    C7.045,5.802,7.027,5.819,7.011,5.84C6.9,5.986,6.963,6.302,7.012,6.483c0.027,0.161,0.089,0.263,0.15,0.326    c0.069,0.461,0.29,0.906,0.582,1.246L7.661,8.182L7.659,8.174L7.656,8.191C7.657,8.188,7.659,8.184,7.66,8.182v0.001L7.655,8.191    C7.538,8.556,6.137,8.982,6.137,8.982C5.721,9.141,5.545,9.381,5.545,9.381c-0.616,0.913-0.688,3.971-0.688,3.971    c0.003,0.219,0.05,0.342,0.097,0.414c-0.095-0.035-0.192-0.071-0.283-0.111c-0.194-0.084-0.557-0.339-0.568-1.066v-0.016v-0.016    c0.009-0.234,0.102-2.314,0.817-3.376c0.039-0.054,0.167-0.214,0.403-0.379c0,0,0-0.001-0.001-0.001    c0.361-0.374,0.626-0.882,0.709-1.368C6.095,7.367,6.16,7.261,6.189,7.092c0.052-0.188,0.117-0.517,0.001-0.67    C6.184,6.414,6.177,6.407,6.171,6.4c0.108-0.396,0.246-1.214-0.244-1.772C5.886,4.572,5.611,4.244,5.023,4.07l-0.28-0.097    C4.28,3.83,3.989,3.799,3.977,3.797c-0.021-0.002-0.043,0-0.063,0.005C3.898,3.808,3.843,3.822,3.8,3.816    C3.69,3.8,3.524,3.857,3.494,3.869C3.456,3.883,2.561,4.242,2.289,5.077c-0.025,0.067-0.133,0.422,0.01,1.292    C2.278,6.383,2.258,6.401,2.241,6.423c-0.116,0.153-0.05,0.48,0.001,0.669c0.027,0.167,0.092,0.272,0.155,0.339    c0.072,0.48,0.302,0.942,0.606,1.296L2.917,8.859L2.915,8.85L2.911,8.868c0.001-0.003,0.004-0.007,0.005-0.01v0.001L2.911,8.868    C2.79,9.248,1.332,9.691,1.332,9.691c-0.433,0.166-0.616,0.415-0.616,0.415C0.075,11.056,0,13.171,0,13.171    c0.008,0.482,0.217,0.533,0.217,0.533c1.473,0.657,3.785,0.773,3.785,0.773c0.125,0.004,0.24-0.003,0.356-0.01l0.003,0.012    c0,0,0.87-0.045,1.881-0.23c1.219,0.295,2.46,0.358,2.46,0.358c0.119,0.003,0.231-0.004,0.342-0.011l0.003,0.012    c0,0,1.295-0.066,2.538-0.379c1.053,0.201,1.979,0.248,1.979,0.248c0.124,0.004,0.24-0.003,0.356-0.01l0.003,0.012    c0,0,2.312-0.117,3.785-0.773c0,0,0.208-0.051,0.216-0.534C17.927,13.173,17.852,11.058,17.211,10.107z" />
          </svg>

          {openings === 0
            ? 'Openings yet to be updated'
            : `${openings} Openings`}
        </div> */}
        </div>
      </div>
    </button>
  );
};

export default CompanyCard;
