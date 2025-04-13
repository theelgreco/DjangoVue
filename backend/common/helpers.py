def custom_preprocessing_hook(endpoints):
    new_endpoints = []

    for index, (path, path_regex, method, callback) in enumerate(endpoints):
        if "/analytics/" not in path:
            new_endpoints.append((path, path_regex, method, callback))
    return new_endpoints
