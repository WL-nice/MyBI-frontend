declare namespace API {
  type BaseResponseBiResponse = {
    code?: number;
    data?: BiResponse;
    message?: string;
    description?: string;
  };

  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
    description?: string;
  };

  type BaseResponseChart = {
    code?: number;
    data?: Chart;
    message?: string;
    description?: string;
  };

  type BaseResponseInteger = {
    code?: number;
    data?: number;
    message?: string;
    description?: string;
  };

  type BaseResponseListTeamUserVo = {
    code?: number;
    data?: TeamUserVo[];
    message?: string;
    description?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
    description?: string;
  };

  type BaseResponsePageChart = {
    code?: number;
    data?: PageChart;
    message?: string;
    description?: string;
  };

  type BaseResponsePageTeam = {
    code?: number;
    data?: PageTeam;
    message?: string;
    description?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
    description?: string;
  };

  type BaseResponseTeam = {
    code?: number;
    data?: Team;
    message?: string;
    description?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
    description?: string;
  };

  type BiResponse = {
    genChart?: string;
    genResult?: string;
    chartId?: number;
  };

  type Chart = {
    id?: number;
    goal?: string;
    name?: string;
    chartData?: string;
    chartType?: string;
    genChart?: string;
    genResult?: string;
    status?: string;
    execMessage?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type ChartAddRequest = {
    goal?: string;
    name?: string;
    chartData?: string;
    chartType?: string;
  };

  type ChartQueryRequest = {
    pageSize?: number;
    current?: number;
    sortOrder?: string;
    sortField?: string;
    id?: number;
    goal?: string;
    chartType?: string;
    name?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    id?: number;
    goal?: string;
    name?: string;
    chartData?: string;
  };

  type deleteChartParams = {
    id: number;
  };

  type deleteTeamParams = {
    teamId: number;
  };

  type deleteUserParams = {
    id: number;
  };

  type genChartByAiParams = {
    genChartByAiRequest: GenChartByAiRequest;
  };

  type GenChartByAiRequest = {
    name?: string;
    goal?: string;
    chartType?: string;
  };

  type getTeamParams = {
    id: number;
  };

  type listChartByIdParams = {
    id: number;
  };

  type listTeamsByPageParams = {
    teamQuery: TeamQuery;
  };

  type listTeamsParams = {
    teamQuery: TeamQuery;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageChart = {
    records?: Chart[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageChart;
    searchCount?: PageChart;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTeam = {
    records?: Team[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTeam;
    searchCount?: PageTeam;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUser = {
    records?: User[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUser;
    searchCount?: PageUser;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type Team = {
    id?: number;
    teamName?: string;
    description?: string;
    expireTime?: string;
    userId?: number;
    password?: string;
    maxNum?: number;
    teamStatus?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type TeamAddRequest = {
    teamName?: string;
    description?: string;
    expireTime?: string;
    userId?: number;
    password?: string;
    maxNum?: number;
    teamStatus?: number;
  };

  type TeamJoinRequest = {
    teamId?: number;
    password?: string;
  };

  type TeamQuery = {
    pageSize?: number;
    current?: number;
    sortOrder?: string;
    sortField?: string;
    id?: number;
    idList?: number[];
    searchText?: string;
    teamName?: string;
    description?: string;
    expireTime?: string;
    userId?: number;
    password?: string;
    maxNum?: number;
    teamStatus?: number;
  };

  type TeamQuitRequest = {
    teamId?: number;
  };

  type TeamUpdateRequest = {
    id?: number;
    teamName?: string;
    description?: string;
    expireTime?: string;
    password?: string;
    teamStatus?: number;
  };

  type TeamUserVo = {
    id?: number;
    teamName?: string;
    description?: string;
    expireTime?: string;
    userId?: number;
    maxNum?: number;
    teamStatus?: number;
    createTime?: string;
    updateTime?: string;
    createUser?: UserVo;
    hasJoin?: boolean;
    hasJoinNum?: number;
  };

  type User = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    userPassword?: string;
    userStatus?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
    userRole?: number;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    pageSize?: number;
    current?: number;
    sortOrder?: string;
    sortField?: string;
    id?: number;
    username?: string;
    userAccount?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
  };

  type userSearchParams = {
    pageSize: number;
    pageNum: number;
  };

  type UserUpdateRequest = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    userPassword?: string;
  };

  type UserVo = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    createTime?: string;
    userStatus?: number;
    userRole?: number;
  };
}
