// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /team/add */
export async function addTeam(body: API.TeamAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/team/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /team/delete */
export async function deleteTeam(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTeamParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/team/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /team/get */
export async function getTeam(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeamParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTeam>('/team/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /team/join */
export async function joinTeam(body: API.TeamJoinRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/team/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /team/list */
export async function listTeams(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listTeamsParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListTeamUserVo>('/team/list', {
    method: 'GET',
    params: {
      ...params,
      teamQuery: undefined,
      ...params['teamQuery'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /team/list/my/create */
export async function listMyCreateTeams(body: API.TeamQuery, options?: { [key: string]: any }) {
  return request<API.BaseResponseListTeamUserVo>('/team/list/my/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /team/list/my/join */
export async function listMyJoinTeams(body: API.TeamQuery, options?: { [key: string]: any }) {
  return request<API.BaseResponseListTeamUserVo>('/team/list/my/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /team/list/page */
export async function listTeamsByPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listTeamsByPageParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTeam>('/team/list/page', {
    method: 'GET',
    params: {
      ...params,
      teamQuery: undefined,
      ...params['teamQuery'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /team/quit */
export async function quitTeam(body: API.TeamQuitRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/team/quit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /team/update */
export async function updateTeam(body: API.TeamUpdateRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/team/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
