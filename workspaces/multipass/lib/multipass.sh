#!/usr/bin/env bash

function multipass::get_instance_cpus() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 15
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::get_instance_mounts_remote_path() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 13 | sed -e 's| *||g' -e 's|=>|,|g' | cut -d ',' -f 2
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::get_instance_mounts_local_path() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 13 | sed -e 's| *||g' -e 's|=>|,|g' | cut -d ',' -f 1
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::get_instance_memory_total() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 12
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::get_instance_memory_usage() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 11
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::get_instance_disk_total() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 10
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::get_instance_disk_usage() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 9
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::get_instance_load_by_quarter() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 8 | cut -d ' ' -f 3
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::get_instance_load_by_five_minutes() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 8 | cut -d ' ' -f 2
  else
    logger::error 'instance not found' >&2
    return 1
  fi

}

function multipass::get_instance_load_by_one_minute() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 8 | cut -d ' ' -f 1
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::get_instance_image_release() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 5
  else
    return 1
  fi
}

function multipass::get_instance_ipv4() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 3
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::is_instance_stopped() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1

  if [[ "$(multipass::get_instance_state "${_instance_name}")" = "Stopped" ]]; then
    return 0
  else
    return 1
  fi

}

function multipass::is_instance_running() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1

  if [[ "$(multipass::get_instance_state "${_instance_name}")" = "Running" ]]; then
    return 0
  else
    return 1
  fi
}

function multipass::get_instance_state() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  if multipass::has_instance "${_instance_name}"; then
    multipass info "${_instance_name}" --format 'csv' | sed -e '1d' | cut -d ',' -f 2
  else
    logger::error 'instance not found' >&2
    return 1
  fi
}

function multipass::has_instance() {
  local -r _instance_name="${1:-}"

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1

  if multipass info "${_instance_name}" --format 'csv' &>/dev/null; then
    return 0
  else
    return 1
  fi
}

function multipass::get_instance_names() {

  validator::is_rfc_1123 "${_instance_name}" >&2 || return 1
  validator::command_exists 'multipass' >&2 || return 1
  validator::command_exists 'cut' >&2 || return 1
  validator::command_exists 'sed' >&2 || return 1

  multipass list --format 'csv' | cut -d ',' -f 1 | sed -e '1d'
}
